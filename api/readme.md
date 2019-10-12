# API DOCUMENTATION

## About Architechture  ·  _(Uncle bob style)_
____

### 0. Configuration: Config folder

    Everything is tied up 

### 1. Core: Templates folder

    Entities are defined


### 2. Use cases: Services folder

    Entities are manipulated (also known as Controllers)

#### 2.5 Utils Folder: 
Helps creation and operation of Services

#### 2.5 Midlewares Folder: 
Helps communication between Services and higher layers (such as entrypoints)

### 3. Data Providers: Lib folder

    App comunicates with external resources for inside jobs

### 4. Entrypoints: Routes folder

    App comunicates with external interfaces and ui for outside jobs

## About Dependencies
____

### Dev Dependencies:
    1. Nodemon: Used for listening changes on project and restarting server

### Dependencies:
    1. dotenv: Used for enviromental variables (security matter)
    2. express: Used for creating the server
    3. cors: Used for handling incoming requests
    4. mongodb: Used for handling database (mongo atlas)
    5. @hapi/joi: Used for creating and validating entitities dataTypes
    6. bcrypt: Used for encryptyng sensitive data





# Entities 
## Contractor 

Defines the owner of job.
- Has an one to many relation with Employee trough Job entity
- Could have a one to many relation with Job entity _(currently doesn't apply because Job Entity is inside Contractor entity)_

Contains personal data, company name and jobList

    · personal data isn't packed making it easier to sql convertion
    · job data is packed into jobList making easier to handle this serviceless entity

## Employee

Defines the jobs maker. 
- Has an one to one relation with Contractor entity trough Job entity
- Could have a many to one relation with Job entity _(Currently doesn't apply because Job entitity is serviceless )_

Container personal data and job aviliableness

    · personal data isn't packed making it easier to sql convertion

## Job 

Defines the relation between Contractor and Employee entities.
- Has an one to one relation with Employee
- Could have an one to one relation with Contractor (currently doesn't apply)


___



//uix ideas 

1. on left sidebar, list with contractors, top bar will say actual contractor when selected (contractor list will be hamburger menu on mobile)

2. on feed, list, squares with aviliable employees

3. on bottom, adding area.

4. on employee adding area drop, form shows (disables feed employees area) and propmt for job data

5. on click sned data button

6. go back to # 2