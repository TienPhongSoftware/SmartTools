import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from 'bcryptjs';
import axios from 'axios';

export default NextAuth({
    providers : [
        CredentialsProvider({
            name : "Credentials",
            async authorize(credentials, req){
                try {
                    const response = await axios.post('https://loginapitp.herokuapp.com/api/auth/login', credentials); 
                    const result = response.data;
                if(!result){
                    throw new Error("No user Found with Email Please Sign Up...!")
                }

                // compare()
                const checkPassword = await compare(credentials.password, result.password);
                console.log(credentials, req)
                // incorrect password
                if(!checkPassword || result.userName !== credentials.userName){
                    throw new Error("Username or Password doesn't match");
                }

                return result;
            } catch (error) {
              throw new Error("Connection Failed...!");
            }
        }
    }),
        
    ],
    
})