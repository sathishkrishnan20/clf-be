/*
    NOTE: members of a class -> functions and variables of the Class

Encapsulation:
    Encapsulation in OOP Meaning: 
        1. encapsulation refers to the bundling of data/variables and methods/functions into a single unit. 
            * Many programming languages use encapsulation frequently in the form of classes. 
            * A class is a program-code-template that allows developers to create an object that has both variables (data) and behaviors (functions or methods). 
        2. Encapsulation may also refer to a mechanism of restricting the direct access to some components of an object, 
            * so that users cannot access state values for all of the variables of a particular object. 
            * Encapsulation can be used to hide both data members or variables and data functions or methods associated with an instantiated class or object.


There are four types of Java access modifiers: (ENCAPSULATION)

    public: 
        The members of a class that are declared public are easily accessible from any part of the program. 
        All data members and member functions of a class are public by default. 
        in python and Javascript, typescript, no need to use any extra keyword to make it public. 
        but for java, use public keyword to make it public,   ex: public getDetails() { }
                

    Private: 
        The access level of a private modifier is only within the class. It cannot be accessed from outside the class.
        to make  members of a class as private
            1. in JavaScript, use hash "#" before the fucntion/variable Name. 
                ex: #displayDetails() { }
            2. in Python, Use double underscore "__" before the fucntion/variable Name 
                ex: def __displayDetails(self):
            3. in TypeScript, use private before fucntion/variable Name  
                 ex: private displayDetails() { }
            4. in Java use private before fucntion/variable Name  
                ex: private displayDetails() { }

    Protected:
       The members of a class that are declared protected are only accessible to a class derived from it. 
       to make  members of a class as private
            1. in Javascript and Python, use single underscore ‘_’ symbol before the data member of that class. 
                NOTE: in Javascript, there protected will not work as effective.
            2. in TypeScript, use protected before fucntion/variable Name  
                 ex: protected displayDetails() { }
            3. in Java use protected before fucntion/variable Name 
                ex: protected displayDetails() { }

    

    Default:
       Explanation for Javascript:
        Explanation for JAVA
            The access level of a default modifier is only within the package. 
            It cannot be accessed from outside the package. 
            If you do not specify any access level, it will be the default.
    
*/
