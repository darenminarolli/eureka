'use client';
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Form = () => {
    const [req, setReq] = useState({
        name: "",
        email: "",
        phone:"",
        message: "",
    });

    const handleSubmit = async (e) => {
        console.log('click',JSON.stringify(req))
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:9002/api/requests", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req)
            });
            const data = await response.json();
            if(data){
                alert('We received your message!')
            }
        setReq({
            name: "",
            email: "",
            phone:"",
            message: "",
        })
        } catch (error) {
            alert("An error occurred!")
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReq((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <Input
                className="max-w-lg"
                name="name"
                onChange={handleChange}
                placeholder="Name"
                type="text"
                value={req.name}
            />
             <Input
                className="max-w-lg"
                name="phone"
                onChange={handleChange}
                placeholder="Phone"
                type="tel"
                value={req.number}
            />
            <Input
                className="max-w-lg"
                name="email"
                onChange={handleChange}
                placeholder="Email"
                type="email"
                value={req.email}
            />
            <Textarea
                className="max-w-lg"
                name="message"
                onChange={handleChange}
                placeholder="Message"
                value={req.message}
            />
            <Button className="w-full" type="submit">
                Submit
            </Button>
        </form>
    );
};

export default Form;
