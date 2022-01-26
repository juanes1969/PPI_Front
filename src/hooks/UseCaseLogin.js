import { useEffect, useState } from "react";
import { getUsers } from "../helpers/LoginHelper";

export const UseCaseLogin = (formLogin) => {

    getUsers(formLogin)
        .then(response => {            
           console.log(response.data.data);           
        })
        .catch(err => {
            console.log(err)
        });
}
