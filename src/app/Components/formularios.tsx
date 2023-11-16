import React from 'react';
import '../Components/styles/formularios.css';
const Formularios = () => {
  return (
    <>
      <form className="formulario">
        <fieldset className="formulario_bordas">
          <legend className="formulario_legenda">Informações do Paciente</legend>

          <label htmlFor="Paciente_name" className="formulario_label">
            Nome do paciente:
          </label>
          <input
            type="text"
            id="Paciente_name"
            name="Paciente_name"
            placeholder="Nome completo do paciente"
            required
            className="formulario_input"
          />

          <label htmlFor="peso" className="formulario_label">
            Peso:
          </label>
          <input
            type="number"
            id="peso"
            name="peso"
            placeholder="Informe o peso em quilogramas"
            required
            className="formulario_input"
          />

          <label htmlFor="idade" className="formulario_label">
            Idade:
          </label>
          <input
            type="number"
            name="idade"
            id="idade"
            placeholder="Informe a idade do paciente"
            className="formulario_input"
          />

          <label htmlFor="alergia" className="formulario_label">
            Alergia a medicamento:
          </label>
          <input
            type="text"
            id="alergia"
            name="alergia"
            placeholder="O paciente tem alguma alergia a medicamento? "
            className="formulario_input"
          />
        </fieldset>

        <fieldset className="formulario_bordas">
          <legend className="formulario_legenda">Prontuário Triagem</legend>

          <label htmlFor="temperatura" className="formulario_label">
            Temperatura (°C):
          </label>
          <input
            type="number"
            id="temperatura"
            name="temperatura"
            step="0.1"
            placeholder="Ex: 36.5"
            required
            className="formulario_input"
          />

          <label htmlFor="frequencia-cardiaca" className="formulario_label">
            Frequência Cardíaca (bpm):
          </label>
          <input
            type="number"
            id="frequencia-cardiaca"
            name="frequencia-cardiaca"
            placeholder="Ex: 80"
            required
            className="formulario_input"
          />

          <label htmlFor="pressao-arterial" className="formulario_label">
            Pressão Arterial (mmHg):
          </label>
          <input
            type="text"
            id="pressao-arterial"
            name="pressao-arterial"
            placeholder="Ex: 120/80"
            required
            className="formulario_input"
          />

          <label htmlFor="respiracao" className="formulario_label">
            Respiração (irpm):
          </label>
          <input
            type="number"
            id="respiracao"
            name="respiracao"
            placeholder="Ex: 16"
            required
            className="formulario_input"
          />

          <button type="submit" className="botao_enviar">
            Enviar
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default Formularios;
