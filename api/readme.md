# API DOCUMENTATION

## About Architechture  ·  _(Uncle bob style)_
____

### 0. Configuration: Config folder

    Everything is tied up 

### 1. Core: Templates folder

    Entities are defined (also known as Models)


### 2. Use cases: Services folder

    Entities are manipulated (also known as Controllers)

#### 2.5 Midlewares Folder: 
Helps communication between Services and higher layers

#### 2.6 Utils Folder: 
Helps creation and communication between Services and higher layers

### 3. Data Providers: Lib folder

    App comunicates with external resources for inside jobs

### 4. Entrypoints: Routes folder

    App comunicates with external interfaces and ui for outside jobs

## About Dependencies
____

### Dev Dependencies:
1. Nodemon: Used for listening changes on project and restarting server

### Dependencies:
1. dotenv:
2. express:
3. cors:
4. mongodb:
5. @hapi/joi:
6. bcrypt: