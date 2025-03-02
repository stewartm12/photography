"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useReservation } from "@/context/reservation-context";
import { toast } from "sonner"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import LocationAddress from './location-address';
// import CategoryDetailsForm from "./category-details-form" // Include when we need to ask more information

export default function ReservationForm() {
  const [date, setDate] = useState(undefined)
  const [time, setTime] = useState('')

  const { formData, setFormData } = useReservation();

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, categoryId: value }))
  }

  const handleNewReservation = () => {
    setFormData((prev) => ({ ...prev, isSuccess: false }))
  }

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate)
    if (time) {
      const dateTimeString = `${format(selectedDate, "yyyy-MM-dd")}T${time}:00`
      setFormData((prev) => ({ ...prev, preferredDateTime: dateTimeString }))
    }
  }

  const handleCheckboxChange = (name, e) => {
    setFormData((prev) => ({ ...prev, [name]: e }))
  }

  const handleTimeChange = e => {
    setTime(e.target.value)

    if (date) {
      const dateTimeString = `${format(date, "yyyy-MM-dd")}T${e.target.value}:00`
      setFormData((prev) => ({ ...prev, preferredDateTime: dateTimeString }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.categoryId) {
      return toast.warning('Please select a category.')
    }

    setFormData((prev) => ({ ...prev, isSubmitting: true }))

    try {
      const response = await fetch("/api/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const result = await response.json()

        setFormData({
          categories: formData.categories,
          fullName: "",
          email: "",
          preferredDateTime: "",
          numberOfParticipants: 1,
          additionalNotes: "",
          categoryId: "",
          displayDate: false,
          displayLocation: false,
          address: "",
          latitude: null,
          longitude: null,
          isSuccess: true
        })

        setDate(undefined)
        setTime("")
      } else {
        console.error("Failed to create reservation")
        toast.error("Something went wrong. Your reservation couldn't be submitted. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("An unexpected error occurred. Please try again later.")
    } finally {
      setFormData((prev) => ({ ...prev, isSubmitting: false }))
    }
  }

  if (formData.isSuccess) {
    return (
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
            <CardTitle className="text-2xl">Reservation Submitted!</CardTitle>
            <CardDescription className="text-base">
              Thank you for your reservation request. We'll be in touch with you soon to confirm the details.
            </CardDescription>
            <Button onClick={handleNewReservation} className="mt-4">
              Make Another Reservation
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mx-auto shadow-lg border-0 sm:border">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Book Your Session</CardTitle>
        <CardDescription className="text-center">Fill out the form below to request your photoshoot</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="focus-visible:ring-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className="focus-visible:ring-primary"
              autoComplete="true"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="numberOfParticipants">Number of Participants</Label>
            <Input
              id="numberOfParticipants"
              name="numberOfParticipants"
              type="number"
              value={formData.numberOfParticipants}
              onChange={handleChange}
              className="focus-visible:ring-primary"
              required
              min="1"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category-select">Session Type</Label>
            <Select onValueChange={handleSelectChange} value={formData.categoryId} name="categorySelect">
              <SelectTrigger className="focus-visible:ring-primary"  id="category-select">
                <SelectValue placeholder="Select a session type" />
              </SelectTrigger>
              <SelectContent>
                {formData.categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* <CategoryDetailsForm /> */}

          <div className="flex justify-around">
            <div className="flex items-center">
              <Checkbox id="displayLocation" name="displayLocation" checked={formData.displayLocation} onCheckedChange={e => handleCheckboxChange('displayLocation', e)} className="mr-2"/>
              <Label htmlFor="displayLocation">Location Available? (If Applicable)</Label>
            </div>

            <div className="flex items-center">
              <Checkbox id="displayDate" name="displayDate" checked={formData.displayDate} onCheckedChange={e => handleCheckboxChange('displayDate', e)} className="mr-2"/>
              <Label htmlFor="displayDate">Date Available? (If Applicable)</Label>
            </div>
          </div>

          {formData.displayDate && (
            <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label >Preferrable Date
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={handleDateSelect}
                      initialFocus
                      disabled={(date) => date < new Date()}
                      required
                    />
                  </PopoverContent>
                </Popover>
                </Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Preferrable Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={time}
                  onChange={handleTimeChange}
                  className="focus-visible:ring-primary"
                  required
                />
              </div>
            </div>
            </>
          )}

          {formData.displayLocation && <LocationAddress handleChange={handleChange} /> }

          <div className="space-y-2">
            <Label htmlFor="additionalNotes">Additional Notes</Label>
            <Textarea
              id="additionalNotes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="Tell us about your vision for the photoshoot..."
              className="min-h-[100px] focus-visible:ring-primary"
            />
          </div>

          <Button type="submit" className="w-full transition-all hover:scale-[1.02]" disabled={formData.isSubmitting}>
            {formData.isSubmitting ? "Submitting..." : "Book Your Session"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}