'use server'
import fs from 'fs/promises'
export const submitAction= async(e)=>{
    let data= await fs.writeFile('DATA.txt', `Name: ${e.get("name")} and address: ${e.get('addr')}`)    
}