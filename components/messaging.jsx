'use client'

import { useState, useRef, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

export function Messaging({ messaging, setMessaging }) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const dialogRef = useRef(null)

  const handleSubmit = () => {
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
      })
      .catch((err) => {
        console.error('[messaging] sent failed', err)
      })

    setTimeout(() => {
      setMessaging(false)
      setMessage('')
      setName('')
    }, 3000)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setMessaging(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setMessaging])

  return (
    <AlertDialog open={true}>
      <AlertDialogContent
        ref={dialogRef}
        className={messaging ? '' : 'hidden' + `z-50 fixed h-fit items-center`}
      >
        <AlertDialogHeader>
          <AlertDialogTitle>Leave me a message</AlertDialogTitle>
          <AlertDialogDescription>
            Tell me who you are and say hi. I'll get back to you as soon as
            possible :)
          </AlertDialogDescription>
          <div className="grid gap-4">
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
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={() => {
              handleSubmit()
            }}
          >
            Submit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
