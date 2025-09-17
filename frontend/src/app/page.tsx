import ProductForm from "./components/product-form";
import UserForm from "./components/user-form";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Veraspecta</h1>
      <UserForm />
      <ProductForm />
    </main>
  );
}
