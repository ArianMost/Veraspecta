"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface ApiResponse {
  id: string;
  status: string;
}

export default function ProductForm() {
  const [form, setForm] = useState<ProductFormData>({
    type: "",
    color: "",
    brand: "",
    material: "",
    size: "",
  });

  const [response, setResponse] = useState<ApiResponse | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8000/products/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        size: Number(form.size),
      }),
    });

    const data: ApiResponse = await res.json();
    setResponse(data);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Create Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {Object.keys(form).map((field) => (
          <div key={field}>
            <label>{field}:</label>
            <input
              className="border p-1 rounded"
              type="text"
              name={field}
              value={form[field as keyof ProductFormData]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>

      {response && (
        <pre className="mt-4 p-2 bg-gray-100 rounded">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}
