import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { getUser as fetchUser } from '../data';
import { User } from '../entity/paper';
import { authConfig } from './auth.config';


async function getUser(name: string): Promise<User | undefined> {
    // 实现获取用户逻辑
    return fetchUser(name);
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ name: z.string(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { name, password } = parsedCredentials.data;
                    const user = await getUser(name);

                    if (user === undefined) return null;
                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    if (passwordsMatch) return user
                }

                return null
            },
        }),
    ],
});