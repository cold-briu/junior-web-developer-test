const EmployeeService = require('./employee.service')
const ManagerService = require('./manager.service')

const employee = new EmployeeService()
const manager = new ManagerService()

module.exports = class JobService {
    constructor() {
        /*
        no class needed, but, it helps to keep 
        same structure as other services
        In future it could became a databaseService,
        returning jobId instead of manager id
        */
    }

    associateEmployee(managerId, data) {
        try {
            let jobList = manager.getJobList(managerId)
            jobList.push(data)
            manager.updateJobList(managerId.jobList)

            let updatedManagerId = manager.updateJobList(managerId, jobList)
            employee.setAviliableTo(data.employeeId, false)
            return updatedManagerId;
        } catch (error) {
            console.error("error inside associate emp", error)
        }
    };

    removeEmployee(managerId, employeeId) {
        try {
            let jobList = manager.getJobList(managerId)

            jobList.map(entry => {
                if (entry.employeeId === employeeId && entry.active === true) {
                    entry.active = false
                    entry.endDate = Date.now()
                    employee.setAviliableTo(employeeId, true)
                }
            })

            let updatedManagerId = manager.updateJobList(managerId, jobList)
            return updatedManagerId;
        } catch (error) {
            console.error("error inside remove emp !!! ", error)
        }
    }

}
