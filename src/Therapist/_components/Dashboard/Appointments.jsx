import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { UserRoundCheck } from "lucide-react";

function Appointments() {
  const clients = [
    {
      email: "sahil@gmail.com",
      name: "Sahil Narale",
      age: "22",
      gender: "Male",
    },
    {
      email: "shreyash@gmail.com",
      name: "Shreyash Chalke",
      age: "22",
      gender: "Male",
    },
    {
      email: "Snehal@gmail.com",
      name: "Snehal Abnave",
      age: "22",
      gender: "Female",
    },
    {
      email: "shubham@gmail.com",
      name: "Shubham Upadhyay",
      age: "22",
      gender: "Male",
    },
    {
      email: "pranav@gmail.com",
      name: "Pranav Salunkhe",
      age: "21",
      gender: "Male",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center py-10 px-2 md:px-6">
      <div className="heading w-full text-center font-bold text-2xl md:text-4xl text-indigo-600">
        <h1>SCHEDULE APPOINTMENTS</h1>
      </div>
      <div className="content shadow-lg mt-10 px-5 py-10 w-full flex flex-col justify-center gap-6">
        <div className="pending-appointments mb-3 shadow-md p-3">
          <div className="heading font-bold text-xl mb-4">
            <h1>Pendign Appointments</h1>
          </div>
          <div className="">
            <Table>
              <TableCaption>A list of your peding appointments.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Email id</TableHead>
                  <TableHead className="text-center">Age</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead className="text-right px-16">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((clients, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {clients.email}
                    </TableCell>
                    <TableCell className="text-center">{clients.age}</TableCell>
                    <TableCell>{clients.name}</TableCell>
                    <TableCell>{clients.gender}</TableCell>
                    <TableCell className="">
                      <div className="btns flex items-center justify-end gap-2">
                        <button className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-700 transition">
                          Accept
                        </button>
                        <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-700 transition">
                          Decline
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={4}>Total</TableCell>
                  <TableCell className="text-right">{clients.length}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
        <hr />
        <div className="confirmed-appointments mb-3 shadow-md p-3">
          <div className="heading font-bold text-xl mb-4">
            <h1>Confirmed Appointments</h1>
          </div>
          <div className="">
            <Table>
              <TableCaption>
                A list of your confirmedd appointments.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Email id</TableHead>
                  <TableHead className="text-center">Age</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((clients, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {clients.email}
                    </TableCell>
                    <TableCell className="text-center">{clients.age}</TableCell>
                    <TableCell>{clients.name}</TableCell>
                    <TableCell>{clients.gender}</TableCell>
                    <TableCell className="">
                      <div className="btns flex items-center justify-end gap-2">
                        <UserRoundCheck />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={4}>Total</TableCell>
                  <TableCell className="text-right">{clients.length}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
        <hr />
        <div className="completed-appointments mb-3 shadow-md p-3">
          <div className="heading font-bold text-xl mb-4">
            <h1>Completed Appointments</h1>
          </div>
          <div className="">
            <Table>
              <TableCaption>
                A list of your completed appointments.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Email id</TableHead>
                  <TableHead className="text-center">Age</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((clients, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {clients.email}
                    </TableCell>
                    <TableCell className="text-center">{clients.age}</TableCell>
                    <TableCell>{clients.name}</TableCell>
                    <TableCell>{clients.gender}</TableCell>
                    <TableCell className="text-right">
                      <div className="btns flex items-center justify-end gap-2">
                        <UserRoundCheck />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={4}>Total</TableCell>
                  <TableCell className="text-right">{clients.length}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
