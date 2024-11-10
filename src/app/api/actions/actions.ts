
"use server"

import { pinata } from "@/app/lib/pinata";

export async function deleteImage(filedId: string) {
 try {

     await pinata.files.delete([filedId]);

     return  {
        success: true,
     };
    
 } catch (error) {
    console.log(error);
    return  {
        success: false, message: "failed to delete file",
     };
 } 
}
