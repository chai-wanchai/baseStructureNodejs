
## How to run nodejs without docker
 1. open cmd/terminal of root project
 2. run command ``` npm start ```
 3. Server running on PORT 3000 (default)
 
## How to run this project with docker
 1. open cmd/terminal of root project
 2. run command ``` docker-compose -f docker-compose.yml up -d --build ```
 
 ## How to build image with docker
  1. open cmd/terminal of root project
  2. run command ``` docker build --no-cache -t api_nodejs -f Dockerfile . ```


## API Spec

GET /api/teachers
POST /api/teacher
  ```javascript
  Request Body
  {
    "first_name":"wanchai",
    "last_name":"nupinit",
    "date_of_birth":"1995-01-23"
  }
  ```

GET /api/courses
POST /api/:teacher_id/course
 ```javascript
  Request Body
  {
    "course_name":"code_manday",
    "course_description":"This is a test for code manday."
  }
  ```