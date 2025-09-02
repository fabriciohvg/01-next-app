"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { CirclePlus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="grid max-w-2xl mx-auto gap-4 p-4">
      <h1 className="text-2xl">Cadastro de novos membros</h1>
      <p>
        Preencha o formulário a seguir com os seus dados para tornar-se membro
        da Igreja Presbiteriana de Anápolis
      </p>

      {/* INÍCIO DO FORMULÁRIO */}

      <h2 className="text-lg border-b mt-4 pb-1">Dados pessoais</h2>
      {/* -- NOME COMPLETO */}
      <Label htmlFor="ipt-nome">Nome completo:</Label>
      <Input type="text" placeholder="Nome completo" id="ipt-nome" />

      {/* -- EMAIL */}
      <Label htmlFor="ipt-email">E-mail:</Label>
      <Input type="email" placeholder="nome@email.com" id="ipt-email" />

      {/* -- SEXO */}
      <Label htmlFor="ipt-nome">Sexo:</Label>
      {/* <RadioGroup className="flex flex-row" defaultValue="opt-mas"> */}
      <RadioGroup className="flex flex-col">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="opt-mas" id="opt-mas" />
          <Label htmlFor="opt-mas">Masculino</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="opt-fem" id="opt-fem" />
          <Label htmlFor="opt-fem">Feminino</Label>
        </div>
      </RadioGroup>

      {/* -- DATA DE NASCIMENTO */}
      <Label>Data de nascimento:</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            data-empty={!date}
            className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
          >
            <CalendarIcon />
            {date ? format(date, "dd/MM/yyyy") : <span>Selecione a data</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={setDate}
          />
        </PopoverContent>
      </Popover>

      {/* TELEFONE */}
      <Label htmlFor="ipt-tel">Telefone (WhatsApp):</Label>
      <Input
        type="number"
        placeholder="(00) 00000-0000"
        id="ipt-tel"
        className="max-w-[280px]"
      />

      {/* -- PROFISSÃO */}
      <Label htmlFor="ipt-">Profissão:</Label>
      <Input type="text" placeholder="Profissão" id="ipt-" />

      {/* ENDEREÇO */}
      <h2 className="text-lg border-b mt-4 pb-1">Endereço</h2>
      <Label htmlFor="ipt-end-cep">CEP:</Label>
      <Input
        type="number"
        placeholder="00000-000"
        id="ipt-end-cep"
        className="max-w-[280px]"
      />

      <Label htmlFor="ipt-end-comp">Complemento:</Label>
      <Input
        type="text"
        placeholder="Quadra, lote, apto..."
        id="ipt-end-comp"
      />

      {/* DADOS FAMILIARES */}
      <h2 className="text-lg border-b mt-4 pb-1">Dados familiares</h2>
      <Label htmlFor="">Estado civil:</Label>
      <Select>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Estado civil" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="casado">Casado</SelectItem>
          <SelectItem value="solteiro">Solteiro</SelectItem>
          <SelectItem value="divorciado">Divorciado</SelectItem>
        </SelectContent>
      </Select>

      <Label htmlFor="">Nome do cônjuge:</Label>
      <Input type="text" placeholder="Nome do cônjuge" id="ipt-" />

      {/* -- FILHOS */}
      <Label htmlFor="ipt-">Tem filhos?</Label>
      <RadioGroup className="flex flex-col">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="opt-fil-sim" id="opt-fil-sim" />
          <Label htmlFor="opt-fil-sim">Sim</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="opt-fil-nao" id="opt-fil-nao" />
          <Label htmlFor="opt-fil-nao">Não</Label>
        </div>
      </RadioGroup>

      <h2 className="text-lg border-b mt-4 pb-1">Dados dos filhos</h2>

      <div className="flex flex-wrap gap-2">
        <Input
          className="w-fit"
          type="text"
          placeholder="Nome do filho"
          id="ipt-"
        />
        <Input
          className="w-fit"
          type="text"
          placeholder="Data nascimento"
          id="ipt-"
        />
        <Select>
          <SelectTrigger className="w-fit">
            <SelectValue placeholder="Sexo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="masculino">Masculino</SelectItem>
            <SelectItem value="feminino">Feminino</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button variant={"outline"} className="w-fit border-dashed">
        {" "}
        <CirclePlus />
        Incluir Filho
      </Button>
      <Separator className="my-4" />

      <Button>Enviar formulário</Button>
      {/* FIM DO FORMULÁRIO */}
    </div>
  );
}
