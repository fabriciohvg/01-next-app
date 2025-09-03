"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, CircleUserRoundIcon } from "lucide-react";

import { useFileUpload } from "@/hooks/use-file-upload";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
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

// Import the JSON data
import fichaData from "./campos-ficha-membro-icalvinus-ipb.json";

export default function FichaMembro() {
  // State for form data
  const [formData, setFormData] = React.useState<Record<string, any>>({});
  
  // State for dates
  const [dateOfBirth, setDateOfBirth] = React.useState<Date>();
  const [marriageDate, setMarriageDate] = React.useState<Date>();
  const [baptismDate, setBaptismDate] = React.useState<Date>();
  const [professionFaithDate, setProfessionFaithDate] = React.useState<Date>();
  const [admissionDate, setAdmissionDate] = React.useState<Date>();
  const [demissionDate, setDemissionDate] = React.useState<Date>();

  // File upload for photo
  const [{ files }, { removeFile, openFileDialog, getInputProps }] =
    useFileUpload({
      accept: "image/*",
    });

  const previewUrl = files[0]?.preview || null;
  const fileName = files[0]?.file.name || null;

  // Handle form field changes
  const handleFieldChange = (fieldName: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", {
      ...formData,
      dateOfBirth,
      marriageDate,
      baptismDate,
      professionFaithDate,
      admissionDate,
      demissionDate,
      photo: files[0]?.file || null,
    });
    // Here you would typically send the data to your backend
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">
        {fichaData.ficha_de_membros.titulo}
      </h1>
      <p className="text-muted-foreground mb-8">
        Preencha todos os campos necessários para o cadastro de membros
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* DADOS PESSOAIS */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-6">
            Dados Pessoais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome *</Label>
              <Input
                id="nome"
                type="text"
                placeholder="Nome completo"
                value={formData.nome || ""}
                onChange={(e) => handleFieldChange("nome", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                type="email"
                placeholder="nome@email.com"
                value={formData.email || ""}
                onChange={(e) => handleFieldChange("email", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endereco">Endereço</Label>
              <Input
                id="endereco"
                type="text"
                placeholder="Endereço completo"
                value={formData.endereco || ""}
                onChange={(e) => handleFieldChange("endereco", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="complemento">Complemento</Label>
              <Input
                id="complemento"
                type="text"
                placeholder="Apto, bloco, etc."
                value={formData.complemento || ""}
                onChange={(e) => handleFieldChange("complemento", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bairro">Bairro</Label>
              <Input
                id="bairro"
                type="text"
                placeholder="Bairro"
                value={formData.bairro || ""}
                onChange={(e) => handleFieldChange("bairro", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cidade">Cidade</Label>
              <Input
                id="cidade"
                type="text"
                placeholder="Cidade"
                value={formData.cidade || ""}
                onChange={(e) => handleFieldChange("cidade", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="estado">Estado</Label>
              <Input
                id="estado"
                type="text"
                placeholder="Estado"
                value={formData.estado || ""}
                onChange={(e) => handleFieldChange("estado", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pais">País</Label>
              <Input
                id="pais"
                type="text"
                placeholder="País"
                value={formData.pais || "Brasil"}
                onChange={(e) => handleFieldChange("pais", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cep">CEP</Label>
              <Input
                id="cep"
                type="text"
                placeholder="00000-000"
                value={formData.cep || ""}
                onChange={(e) => handleFieldChange("cep", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                id="telefone"
                type="text"
                placeholder="(00) 0000-0000"
                value={formData.telefone || ""}
                onChange={(e) => handleFieldChange("telefone", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="celular">Celular</Label>
              <Input
                id="celular"
                type="text"
                placeholder="(00) 00000-0000"
                value={formData.celular || ""}
                onChange={(e) => handleFieldChange("celular", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="naturalidade">Naturalidade</Label>
              <Input
                id="naturalidade"
                type="text"
                placeholder="Cidade de nascimento"
                value={formData.naturalidade || ""}
                onChange={(e) => handleFieldChange("naturalidade", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Data de Nascimento</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dateOfBirth && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateOfBirth ? (
                      format(dateOfBirth, "dd/MM/yyyy")
                    ) : (
                      <span>Selecione a data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={dateOfBirth}
                    onSelect={setDateOfBirth}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-3">
              <Label>Sexo</Label>
              <RadioGroup
                value={formData.sexo || ""}
                onValueChange={(value) => handleFieldChange("sexo", value)}
                className="flex flex-row gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="masculino" id="masculino" />
                  <Label htmlFor="masculino">Masculino</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="feminino" id="feminino" />
                  <Label htmlFor="feminino">Feminino</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        <Separator />

        {/* DADOS COMPLEMENTARES */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-6">
            Dados Complementares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="estadoCivil">Estado Civil</Label>
              <Select onValueChange={(value) => handleFieldChange("estadoCivil", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o estado civil" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="solteiro">Solteiro(a)</SelectItem>
                  <SelectItem value="casado">Casado(a)</SelectItem>
                  <SelectItem value="divorciado">Divorciado(a)</SelectItem>
                  <SelectItem value="viuvo">Viúvo(a)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="conjuge">Cônjuge</Label>
              <Input
                id="conjuge"
                type="text"
                placeholder="Nome do cônjuge"
                value={formData.conjuge || ""}
                onChange={(e) => handleFieldChange("conjuge", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Data do Casamento</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !marriageDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {marriageDate ? (
                      format(marriageDate, "dd/MM/yyyy")
                    ) : (
                      <span>Selecione a data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={marriageDate}
                    onSelect={setMarriageDate}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cpfRg">CPF ou RG</Label>
              <Input
                id="cpfRg"
                type="text"
                placeholder="000.000.000-00 ou 00.000.000-0"
                value={formData.cpfRg || ""}
                onChange={(e) => handleFieldChange("cpfRg", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="orgaoEmissor">Órgão Emissor</Label>
              <Input
                id="orgaoEmissor"
                type="text"
                placeholder="SSP, DETRAN, etc."
                value={formData.orgaoEmissor || ""}
                onChange={(e) => handleFieldChange("orgaoEmissor", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="escolaridade">Escolaridade</Label>
              <Select onValueChange={(value) => handleFieldChange("escolaridade", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a escolaridade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fundamental-incompleto">Ensino Fundamental Incompleto</SelectItem>
                  <SelectItem value="fundamental-completo">Ensino Fundamental Completo</SelectItem>
                  <SelectItem value="medio-incompleto">Ensino Médio Incompleto</SelectItem>
                  <SelectItem value="medio-completo">Ensino Médio Completo</SelectItem>
                  <SelectItem value="superior-incompleto">Ensino Superior Incompleto</SelectItem>
                  <SelectItem value="superior-completo">Ensino Superior Completo</SelectItem>
                  <SelectItem value="pos-graduacao">Pós-graduação</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="profissao">Profissão</Label>
              <Input
                id="profissao"
                type="text"
                placeholder="Profissão"
                value={formData.profissao || ""}
                onChange={(e) => handleFieldChange("profissao", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nomePai">Nome do Pai</Label>
              <Input
                id="nomePai"
                type="text"
                placeholder="Nome completo do pai"
                value={formData.nomePai || ""}
                onChange={(e) => handleFieldChange("nomePai", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nomeMae">Nome da Mãe</Label>
              <Input
                id="nomeMae"
                type="text"
                placeholder="Nome completo da mãe"
                value={formData.nomeMae || ""}
                onChange={(e) => handleFieldChange("nomeMae", e.target.value)}
              />
            </div>
          </div>
        </section>

        <Separator />

        {/* DADOS ECLESIÁSTICOS */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-6">
            Dados Eclesiásticos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="ondeCongrega">Onde congrega (Igreja Principal ou Congregação)</Label>
              <Input
                id="ondeCongrega"
                type="text"
                placeholder="Igreja ou congregação"
                value={formData.ondeCongrega || ""}
                onChange={(e) => handleFieldChange("ondeCongrega", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="numeroOrdem">Número de Ordem (matrícula)</Label>
              <Input
                id="numeroOrdem"
                type="text"
                placeholder="Número da matrícula"
                value={formData.numeroOrdem || ""}
                onChange={(e) => handleFieldChange("numeroOrdem", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="membro">Membro</Label>
              <Select onValueChange={(value) => handleFieldChange("membro", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Tipo de membro" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="comungante">Comungante</SelectItem>
                  <SelectItem value="nao-comungante">Não comungante</SelectItem>
                  <SelectItem value="nao-membro">Não membro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="oficio">Ofício</Label>
              <Select onValueChange={(value) => handleFieldChange("oficio", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Ofício eclesiástico" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nao-oficial">Não oficial</SelectItem>
                  <SelectItem value="diacono">Diácono</SelectItem>
                  <SelectItem value="presbitero">Presbítero</SelectItem>
                  <SelectItem value="presbitero-disponibilidade">Presbítero em disponibilidade</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Data do Batismo</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !baptismDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {baptismDate ? (
                      format(baptismDate, "dd/MM/yyyy")
                    ) : (
                      <span>Selecione a data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={baptismDate}
                    onSelect={setBaptismDate}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pastorBatismo">Pastor que realizou o batismo</Label>
              <Input
                id="pastorBatismo"
                type="text"
                placeholder="Nome do pastor"
                value={formData.pastorBatismo || ""}
                onChange={(e) => handleFieldChange("pastorBatismo", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="igrejaBatismo">Igreja onde aconteceu o batismo</Label>
              <Input
                id="igrejaBatismo"
                type="text"
                placeholder="Nome da igreja"
                value={formData.igrejaBatismo || ""}
                onChange={(e) => handleFieldChange("igrejaBatismo", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Data da Profissão de Fé</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !professionFaithDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {professionFaithDate ? (
                      format(professionFaithDate, "dd/MM/yyyy")
                    ) : (
                      <span>Selecione a data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={professionFaithDate}
                    onSelect={setProfessionFaithDate}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pastorProfissao">Pastor que dirigiu a Profissão de Fé</Label>
              <Input
                id="pastorProfissao"
                type="text"
                placeholder="Nome do pastor"
                value={formData.pastorProfissao || ""}
                onChange={(e) => handleFieldChange("pastorProfissao", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="igrejaProfissao">Igreja onde aconteceu a Profissão de Fé</Label>
              <Input
                id="igrejaProfissao"
                type="text"
                placeholder="Nome da igreja"
                value={formData.igrejaProfissao || ""}
                onChange={(e) => handleFieldChange("igrejaProfissao", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Data da Admissão</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !admissionDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {admissionDate ? (
                      format(admissionDate, "dd/MM/yyyy")
                    ) : (
                      <span>Selecione a data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={admissionDate}
                    onSelect={setAdmissionDate}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="meioAdmissao">Meio de Admissão</Label>
              <Select onValueChange={(value) => handleFieldChange("meioAdmissao", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Como foi admitido" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="batismo">Batismo</SelectItem>
                  <SelectItem value="profissao-fe">Profissão de fé</SelectItem>
                  <SelectItem value="batismo-profissao-fe">Batismo e profissão de fé</SelectItem>
                  <SelectItem value="transferencia">Transferência</SelectItem>
                  <SelectItem value="transferencia-responsaveis">Transferência dos responsáveis</SelectItem>
                  <SelectItem value="restauracao">Restauração</SelectItem>
                  <SelectItem value="jurisdicao-ex-officio">Jurisdição ex officio</SelectItem>
                  <SelectItem value="jurisdicao-pedido">Jurisdição a pedido</SelectItem>
                  <SelectItem value="jurisdicao-responsaveis">Jurisdição sobre os responsáveis</SelectItem>
                  <SelectItem value="designacao-presbitero">Designação do presbítero</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Data da Demissão</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !demissionDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {demissionDate ? (
                      format(demissionDate, "dd/MM/yyyy")
                    ) : (
                      <span>Selecione a data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={demissionDate}
                    onSelect={setDemissionDate}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="situacao">Situação</Label>
              <Select onValueChange={(value) => handleFieldChange("situacao", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Situação atual" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ativo">Ativo</SelectItem>
                  <SelectItem value="inativo">Inativo</SelectItem>
                  <SelectItem value="frequenta">Frequenta</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Status Especiais</Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="disciplinado"
                    checked={formData.disciplinado || false}
                    onCheckedChange={(checked) =>
                      handleFieldChange("disciplinado", checked)
                    }
                  />
                  <Label htmlFor="disciplinado">Disciplinado</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="transferenciaPendente"
                    checked={formData.transferenciaPendente || false}
                    onCheckedChange={(checked) =>
                      handleFieldChange("transferenciaPendente", checked)
                    }
                  />
                  <Label htmlFor="transferenciaPendente">Transferência Pendente</Label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* RELAÇÃO FAMILIAR */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-6">
            Relação Familiar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="relacao">Relação</Label>
              <Select onValueChange={(value) => handleFieldChange("relacao", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Tipo de relação" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pai">Pai</SelectItem>
                  <SelectItem value="mae">Mãe</SelectItem>
                  <SelectItem value="esposo">Esposo</SelectItem>
                  <SelectItem value="irmao">Irmão</SelectItem>
                  <SelectItem value="filho">Filho</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="relacionadoCom">Relacionado com (membro)</Label>
              <Input
                id="relacionadoCom"
                type="text"
                placeholder="Nome do membro relacionado"
                value={formData.relacionadoCom || ""}
                onChange={(e) => handleFieldChange("relacionadoCom", e.target.value)}
              />
            </div>
          </div>
        </section>

        <Separator />

        {/* HISTÓRICO */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-6">
            Histórico
          </h2>
          <div className="space-y-2">
            <Label htmlFor="anotacoes">Anotações</Label>
            <Textarea
              id="anotacoes"
              placeholder="Observações importantes sobre o membro..."
              className="min-h-[120px]"
              value={formData.anotacoes || ""}
              onChange={(e) => handleFieldChange("anotacoes", e.target.value)}
            />
          </div>
        </section>

        <Separator />

        {/* FOTO */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-6">
            Foto do Membro
          </h2>
          <div className="space-y-4">
            <Label htmlFor="foto">Adicionar/Alterar Foto</Label>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="border-input relative flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-md border"
                  aria-label={
                    previewUrl ? "Preview of uploaded image" : "Default user avatar"
                  }
                >
                  {previewUrl ? (
                    <img
                      className="size-full object-cover"
                      src={previewUrl}
                      alt="Preview of uploaded image"
                      width={80}
                      height={80}
                    />
                  ) : (
                    <div aria-hidden="true">
                      <CircleUserRoundIcon className="opacity-80" size={32} />
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Button onClick={openFileDialog} type="button" variant="outline">
                    {fileName ? "Alterar foto" : "Enviar foto"}
                  </Button>
                  <input
                    {...getInputProps()}
                    className="sr-only"
                    aria-label="Upload image file"
                    tabIndex={-1}
                  />
                  {fileName && (
                    <div className="flex items-center gap-2 text-sm">
                      <p className="text-muted-foreground truncate" aria-live="polite">
                        {fileName}
                      </p>
                      <button
                        onClick={() => removeFile(files[0]?.id)}
                        type="button"
                        className="text-destructive font-medium hover:underline"
                        aria-label={`Remove ${fileName}`}
                      >
                        Remover
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* SUBMIT BUTTON */}
        <div className="flex justify-end gap-4 pt-6">
          <Button type="button" variant="outline">
            Cancelar
          </Button>
          <Button type="submit" className="min-w-[200px]">
            Salvar Cadastro de Membro
          </Button>
        </div>
      </form>
    </div>
  );
}
