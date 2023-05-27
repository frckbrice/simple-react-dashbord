// import React from 'react'

// this help simulate api fetch
const Register = (data) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if(data.email === 'maebrie2017@email.com'){
        reject({
          errors: {
            email: "maebrie2017@email.com is already used",
          },
        });
      }else {
        resolve({
          message: 'Registration successful',
          success: 'true'
        })
      }
    },2000)
  })
}

export default Register;
