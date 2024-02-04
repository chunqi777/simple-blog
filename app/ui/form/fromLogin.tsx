'use client';

import { authenticate } from '@/app/lib/data';
import { useFormState, useFormStatus } from 'react-dom';
import { KeyIcon, UserIcon } from "../svgIcon/svgIcon";


export default function FromLogin() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);
    const { pending } = useFormStatus();
    return (
        <div className="w-full h-full sm:w-[530px] sm:h-[500px] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <form action={dispatch} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-origin-20 px-6 w-full sm:w-[430px] rounded-lg">
                <h1 className="text-3xl text-center my-4">登录</h1>
                <div className="inline-block w-full py-4">
                    <span>用户名</span>
                    <div className="relative">
                        <input
                            id='name'
                            name='name'
                            type="text"
                            required
                            placeholder="Username"
                            className="w-full h-10 p-2 pl-8 mt-2 border rounded" />
                        <UserIcon className="absolute top-[59%] -translate-y-1/2 left-2 text-[rgba(107,114,128)]" />
                    </div>
                </div>
                <div className="inline-block w-full py-4">
                    <span>密码</span>
                    <div className="relative">
                        <input
                            id='password'
                            name='password'
                            type="password"
                            required
                            placeholder="Username"
                            className="w-full h-10 p-2 pl-8 mt-2 border rounded" />
                        <KeyIcon className="absolute top-[59%] -translate-y-1/2 left-2 text-[rgba(107,114,128)]" />
                    </div>
                </div>
                <button type="submit" aria-disabled={pending} className="w-full h-10 p-2 my-4 bg-orange-400 hover:bg-orange-300 transition-colors rounded">
                    Login
                </button>
            </form>
        </div>
    )
}