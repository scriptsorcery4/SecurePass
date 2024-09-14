'use client'
import { IoIosArrowForward } from "react-icons/io";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";

const generatePassword = (length, includeSpecialChars) => {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let characters = lowerCase + upperCase + numbers;
    
    if (includeSpecialChars) {
        characters += specialChars;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    console.log(password)
    return password;
};

const options = [
    {id: 1, title: 8},
    {id: 2, title: 10},
    {id: 3, title: 12},
    {id: 4, title: 20},
]

function App() {
    const [opt, setOpt] = useState(8)
    const [spc, setSpc] = useState(true)
    const [pass, setPass] = useState('')

    const handleClick = (id) =>{
        setOpt(id)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        toast.dismiss();
        const password = generatePassword(opt, spc);
        setPass(password)
        toast.success('Success generated!');
    }

    const handleCopy = () => {
      toast.dismiss();
      if (!pass) {
        toast.error('No text to copy');
        return;
      }
    
      if (navigator.clipboard) {
        navigator.clipboard.writeText(pass).then(() => {
          toast.success('Password copied!');
        }).catch(err => {
          toast.error('Could not copy text: ' + err.message);
        });
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = pass;
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          toast.success('Password copied!');
        } catch (err) {
          toast.error('Could not copy text: ' + err.message);
        }
        document.body.removeChild(textarea);
      }
    };
    
    
    
  return (
    <div className="max-w-xl mx-auto p-4 flex flex-col items-center justify-center h-[80vh]">
      {!pass ? <div className="w-full space-y-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Generate Your New Password!</h1>
          <p className="text-base-content/80">
          Generate your password in just a few clicks and secure your privacy! 
          </p>
        </div>
        <div className="space-y-1">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">How many characters do you need?</span>
              </label>
              <div className="flex gap-2">
                {options.map(option=>(
                    <div onClick={()=>{handleClick(option.title)}} key={option.id} className={`btn btn-square rounded-full ${opt === option.title && 'ring'}`}>{option.title}</div>
                ))}
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text">
                Do you want to use special characters? (@, #, $)
                </span>
              </label>
              <div className="flex gap-4">
                <div className="flex gap-1">
                    <input
                onClick={()=>{setSpc(true)}}
                type="radio"
                name="radio-1"
                className="radio scale-90"
                defaultChecked
              />
              <p className="font-medium">YES</p>
              </div>
              <div className="flex gap-1">
                    <input
                onClick={()=>{setSpc(false)}}
                type="radio"
                name="radio-1"
                className="radio scale-90"     
              />
              <p className="font-medium">NO</p>
              </div>

              </div>
              
              
            </div>
            <button className="btn btn-secondary btn-block">GENERATE</button>
          </form>
          <button className="btn btn-ghost btn-block">BACK HOME</button>
        </div>
      </div> : <div className="w-full space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Your password is generated!</h1>
          <p className="text-base-content/80">
          Copy it to use and keep it safe!
          </p>
        </div>
        <div>
        <div onClick={handleCopy} className="bg-base-content/5 p-4 rounded-xl flex items-center gap-2 w-fit hover:bg-base-content/10 transition-all duration-300 ease-out">
        <IoIosArrowForward size={15} />
        <p className="cursor-pointer">{pass}</p>
        </div>
        <label className="label">
          <span className="text-[13px] -mt-1">*click to copy your new password</span>
        </label>
        </div>
        <div className="space-y-1">
          <button onClick={()=>{
            setPass('')
            setSpc(true)
            }} className="btn btn-secondary btn-block">TRY AGAIN</button>
          <Link href={'/'} className="btn btn-ghost btn-block">BACK HOME</Link>
        </div>
        </div>}
        <div className="fixed bottom-0 p-4 flex gap-2 items-center">
          <Image
          src='/icon.png'
          alt="logo"
          width={35}
          height={35}/>
          <p className="font-bold text-base-content/90">SecurePass</p>
        </div>
    </div>
  );
}

export default App;
