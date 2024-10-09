import { api } from "@/lib/axios";

export interface SignUpBody {
  name: string,
  phone: string,
  email: string,
  avatarId: string | null,
  password: string,
  passwordConfirmation: string
}

export interface SignUpResponse {
  id: string,
  name: string,
  phone: string,
  email: string,
  avatarId?: {
    id: string,
    url: string,
  }
}

export async function signUp({ name, phone, email, avatarId, password, passwordConfirmation }: SignUpBody) {
  const response = await api.post<SignUpResponse>('/sellers', { name, phone, email, avatarId, password, passwordConfirmation })
  return response.data
}