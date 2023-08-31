class DisciplinaControlador {
    constructor() {
        this.servico = new DisciplinaServico();
        this.servicoAluno = new AlunoService();
    }

    inserirDisciplina() {
        const codigoElemento = document.querySelector("#codigoDisciplina");
        const nomeElemento = document.querySelector("#nomeDisciplina");
        const disciplinaInserida = this.servico.inserir(codigoElemento.value, nomeElemento.value);
        this.atualizarListaDisciplinas();
    }

    adicionarAlunoNaDisciplina() {
        const codigoDisciplinaElemento = document.querySelector("#codigoDisciplina");
        const alunoParaAdicionarElemento = document.querySelector("#alunoParaAdicionar");
        const disciplina = this.servico.repositorio.pesquisarPorCodigo(codigoDisciplinaElemento.value);
        const aluno = this.servicoAluno.pesquisarPorMatricula(alunoParaAdicionarElemento.value);
        console.log(aluno);

        if (!disciplina) {
            alert('Disciplina não encontrada!');
            return;
        }

        if (!aluno) {
            alert('Aluno não encontrado!');
            return;
        }

        this.servico.adicionarAlunoNaDisciplina(disciplina, aluno);
        this.atualizarListaDisciplinas();
    }

    atualizarListaDisciplinas() {
        const listaDisciplinasElemento = document.querySelector("#listaDisciplinas");
        listaDisciplinasElemento.innerHTML = '';

        const disciplinas = this.servico.listar();
        disciplinas.forEach(disciplina => {
            const disciplinaElemento = document.createElement("li");
            disciplinaElemento.textContent = `Código: ${disciplina.codigo} - Nome: ${disciplina.nome}`;
            listaDisciplinasElemento.appendChild(disciplinaElemento);
        });
    }
}

const controladorDisciplina = new DisciplinaControlador();
