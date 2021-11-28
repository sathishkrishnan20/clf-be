/*
    
    Introduction
    interface
    enum
    OOPS in typescript
        Classes, 
        Class properties, 
        Static Properties
        Inheritance, Abstract classes, Interfaces


    Typescript, is a superset of JavaScript.
    It incorporates every JavaScript feature with supplementary traits such as static typing and type checking.



    Setting up Typescript
        1. install typescript dependecies
            npm install -g typescript

        2. Create Typescript config file
            Automatic way 
                tsc --init
            Manually:
                create a tsconfig.json file in the project root directory.

        3. modify tsconfig file as below
            make noImplicitAny as false
            add exclude option for node_modules folder as below
                "exclude":[
                    "./node_modules"
                ]
            outDir as './dest'
        4. Rename .js into .ts
        5. Replace the module.exports with export default and require with import statement


*/