import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <main className="grid grid-cols-12 items-center min-w-[720px] justify-center min-h-screen bg-blue-100">
      <div className="grid col-span-6">
        <Card className="w-full m-auto max-w-sm min-w-sm bg-blue-50 text-blue-600 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle>Faça login na sua conta</CardTitle>
            <CardDescription>
              Insira seu email abaixo para entrar na sua conta.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-white text-gray-900"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Senha</Label>
                    <Link
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Esqueceu sua senha?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    placeholder="********"
                    className="bg-white text-gray-900"
                    type="password"
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" variant="blue" className="w-full">
              Login
            </Button>
            <Button variant="outlineBlue" className="w-full text-blue-600">
              Login com Google <FcGoogle />
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="grid w-full h-full col-span-6 m-auto bg-[url('/login_direita.png')] bg-cover bg-no-repeat bg-center shadow-2xl" />
    </main>
  );
}
