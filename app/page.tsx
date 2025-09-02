"use client";

import React from "react";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="grid max-w-lg mx-auto gap-4 p-4">
      <h1 className="text-2xl">Cadastro de novos membros</h1>
      <p>
        Preencha o formulário a seguir com os seus dados para tornar-se membro
        da Igreja Presbiteriana de Anápolis
      </p>

      {/* INÍCIO DO FORMULÁRIO */}
      <Input type="text" placeholder="Nome completo" />
    </div>
  );
}
