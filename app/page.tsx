"use client";
import Link from 'next/link';
import Navbar from "./components/navbar";
import { Button } from '@mantine/core';

export default function Demo() {
  return (
    <div>
      <Navbar />
      <Button component={Link} href="/hello">
        Next link button
      </Button>
    </div>

  );
}