'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useForm } from "react-hook-form"

import { toast } from "@/components/ui/use-toast"
import { signIn } from "next-auth/react"
import { useState } from 'react'; // Importe useState do React


export function AuthForm() {
    const form = useForm()
    const [loading, setLoading] = useState(false); // Adicione o estado de loading

    const handleSubmit = form.handleSubmit(async (data) => {
      setLoading(true); // Inicie o loading antes do signIn
      try {
        await signIn('email', { email: data.email, redirect: false })
        toast({
          title: 'Check your email',
          description: 'We sent a magic link to your email',
        })
      } catch (error) {
        console.log(error);
        toast({
          title: 'Error',
          description: (error as any).message,
        })
      } finally {
        setLoading(false); // Finalize o loading após o signIn, independentemente do resultado
      }
    })

  return (
    <div className="mx-auto max-w-sm space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your email to login to your account</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" {... form.register('email')}/>
        </div>
        <Button className="w-full" type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Send Magic Link'}
          </Button>
        <div className="text-center">
          <Link className="text-gray-500 dark:text-gray-400 hover:underline" href="/">
            Go back to the main page
          </Link>
        </div>
      </form>
    </div>
  )
}