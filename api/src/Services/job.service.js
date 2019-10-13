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

    async associateEmployee(managerId, data) {
        try {
            let jobList = await manager.getJobList(managerId)
            jobList.push(data)

            let updatedManagerId = await manager.updateJobList(managerId, jobList)
            let updatedEmployeeId = await employee.setAviliableTo(data.employeeId, false)
            return { manager: updatedManagerId, employee: updatedEmployeeId };

        } catch (error) {
            console.error("error inside associate emp", error)
        }
    };

    async removeEmployee(managerId, employeeId) {
        try {
            let jobList = await manager.getJobList(managerId)

            let updatedEmployeeId;
            jobList.map(async entry => {
                if (entry.employeeId === employeeId && entry.active === true) {
                    entry.active = false
                    entry.endDate = Date.now()
                    updatedEmployeeId = await employee.setAviliableTo(employeeId, true)
                }
            })

            let updatedManagerId = await manager.updateJobList(managerId, jobList)
            return { manager: updatedManagerId, employee: updatedEmployeeId };
        } catch (error) {
            console.error("error inside remove emp !!! ", error)
        }
    }

    async makeReport() {
        try {
            const allJobs = await manager.getAllJobs()
            let table = []
            allJobs.map(entry => table = table.concat(entry))

            /**
             [
                 {
                     manager name
                     employee name
                     job name
        
                     NEXT STEP IS TO MAKE HOURS OPERATIONS
                 }
             ]
             */

            return table
        } catch (error) {
            console.error("error inside make reprt !!! ", error)
        }
    }

}
