'use client'

import { useState } from 'react'
import emailjs from 'emailjs-com'
import { Button } from '@/Components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/Components/ui/label'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

export function CardsMessaging() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateParams = {
      from_name: name,
      message: message,
    }

    emailjs
      .send(
        'service_dp1on4k',
        'template_0zt3e21',
        templateParams,
        'KDN2f2vnBVWbulv7J',
      )
      .then((response) => {
        console.log(
          '[messaging] sent successfully',
          response.status,
          response.text,
        )
        setSent(1)
      })
      .catch((err) => {
        console.error('[messaging] sent failed', err)
        setSent(2)
      })
  }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-lg">Send me a message</CardTitle>
        <CardDescription>
          Tell me who you are and say hi. I'll get back to you as soon as
          possible :)
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Nickname is okay"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Message</Label>
            <Textarea
              id="message"
              placeholder="Leave your thoughts here."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </CardFooter>
      </form>
      {sent === 1 && (
        <AlertDialog open={true}>
          <AlertDialogContent className="z-50 fixed h-40 items-center">
            <AlertDialogHeader>
              <AlertDialogTitle>Message sent</AlertDialogTitle>
              <AlertDialogDescription>
                Thanks for your message. I'll get back to you as soon as
                possible :)
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction
                onClick={() => {
                  setSent(0)
                  setMessage('')
                  setName('')
                }}
              >
                Cool
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
      {sent === 2 && (
        <AlertDialog open={true}>
          <AlertDialogContent className="z-50 fixed h-40 items-center">
            <AlertDialogHeader>
              <AlertDialogTitle>Failed :(</AlertDialogTitle>
              <AlertDialogDescription>
                There is an error sending your message. I'll look into it.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction
                onClick={() => {
                  setSent(0)
                  setMessage('')
                  setName('')
                }}
              >
                Got it
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </Card>
  )
}
