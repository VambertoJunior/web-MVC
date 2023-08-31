class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const disciplinaExistente = this.repositorio.pesquisarPorCodigo(codigo);
        if (disciplinaExistente) {
            throw new Error('Disciplina já cadastrada!');
        }

        const novaDisciplina = new Disciplina(codigo, nome);
        this.repositorio.inserir(novaDisciplina);
        return novaDisciplina;
    }

    atualizar(codigo, nome) {
        const disciplinaExistente = this.repositorio.pesquisarPorCodigo(codigo);
        if (!disciplinaExistente) {
            throw new Error('Disciplina não encontrada!');
        }

        disciplinaExistente.nome = nome;
        this.repositorio.atualizar(disciplinaExistente);
        return disciplinaExistente;
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    listar() {
        return this.repositorio.listar();
    }

    adicionarAlunoNaDisciplina(disciplina, aluno) {
        disciplina.inserirAluno(aluno);
        this.repositorio.atualizar(disciplina);
    }
}
