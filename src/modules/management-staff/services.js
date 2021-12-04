
class ManagementStaffService {
    #managementStaffData = []; // array DB
    
    createManagementStaff(data) {
        const email = data.email;
        const firstname = data.firstName;
        const password = data.password;
        if (firstname === undefined || firstname === '') {
            const response = {
                statusCode: 400,
                message: 'first name is invalid'
            }
            return response;
        }
        if (email === undefined || email === '') {
            const response = {
                statusCode: 400,
                message: 'Invalid Email'
            }
            return response;
        }
        if (password === undefined || password === '') {
            const response = {
                statusCode: 400,
                message: 'Invalid Password'
            }
            return response;
        }

       for (let arrayIndex = 0; arrayIndex < this.#managementStaffData.length; arrayIndex++) {
            const element = this.#managementStaffData[arrayIndex];
            if (element.email === email) {
                const response = {
                    statusCode: 400,
                    message: 'Email is already Present, Please use another email'
                }
                return response;
            }
       }

        this.#managementStaffData.push(data);
        const response = {
            statusCode: 200,
            message: 'Management Staff Created',
            data: this.#managementStaffData
        }
        return response
    }

    loginManagementStaff(data) {
        const email = data.email;
        const password = data.password;

        for (let index = 0; index < this.#managementStaffData.length; index++) {
            const element = this.#managementStaffData[index];
            if (element.email === email && element.password === password) {
                const response = {
                    statusCode: 200,
                    message: 'Login Successfull',
                    data: element
                }
                return response;
            }
        }
        const response = {
            statusCode: 404,
            message: 'Invalid Crediantials'    
        }
        return response;
    }
}
module.exports = ManagementStaffService;


