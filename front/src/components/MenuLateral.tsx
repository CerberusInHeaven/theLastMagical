"use client"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { IoExitOutline } from "react-icons/io5"
import { BiSolidDashboard } from "react-icons/bi"
import { FaUsers } from "react-icons/fa6"
import { BsCashCoin } from "react-icons/bs"
import { LuSwords } from "react-icons/lu"
import Link from "next/link"

export function MenuLateral() {
  const router = useRouter()

  function adminSair() {
    if (confirm("Confirma Saída?")) {
      Cookies.remove("admin_logado_id")
      Cookies.remove("admin_logado_nome")
      Cookies.remove("admin_logado_token")
      router.replace("/")
    }
  }

  return (
    <aside id="default-sidebar" className="fixed mt-24 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-[#470e24]">
        <ul className="space-y-2 font-medium">
        <li>
            <Link href="/principal" className="flex items-center p-2">
              <span className="h-5 text-gray-600 text-2xl">
                <BiSolidDashboard className="text-white" />
              </span>
              <span className="ms-2 mt-1 text-white">Visão Geral</span>
            </Link>
          </li>
          <li>
            <Link href="/principal/carros" className="flex items-center p-2">
              <span className="h-5 text-gray-600 text-2xl">
                <LuSwords className="text-white" />
              </span>
              <span className="ms-2 mt-1 text-white">Canalize seus artefatos</span>
            </Link>
          </li>
          <li>
          <Link href="/principal/clientes" className="flex items-center p-2">
              <span className="h-5 text-gray-600 text-2xl">
                <FaUsers className="text-white" />
              </span>
              <span className="ms-2 mt-1 text-white">MONITORE SEUS BARGANHADORES</span>
            </Link>
          </li>
          <li>
          <Link href="/principal/propostas" className="flex items-center p-2 cursor-pointer">
              <span className="h-5 text-gray-600 text-2xl">
                <BsCashCoin className="text-white"/>
              </span>
              <span className="ms-2 mt-1 text-white">VEJA AS BARGANHAS</span>
            </Link>
          </li>

          <li>
            <span className="flex items-center p-2 cursor-pointer">
              <span className="h-5 text-gray-600 text-2xl">
                <IoExitOutline className="text-white" />
              </span>
              <span className="ms-2 mt-1 text-white" onClick={adminSair}>PICA A MULA PARA O SEU MONASTÉRIO</span>
            </span>
          </li>
        </ul>
      </div>
    </aside>
  )
}