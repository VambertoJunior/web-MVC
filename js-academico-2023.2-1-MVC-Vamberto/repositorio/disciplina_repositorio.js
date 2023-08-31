class DisciplinaRepositorio {
    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    atualizar(disciplina) {
        const index = this.disciplinas.findIndex(d => d.codigo === disciplina.codigo);
        if (index !== -1) {
            this.disciplinas[index] = disciplina;
        }
        console.log(disciplina);
    }

    remover(codigo) {
        const index = this.disciplinas.findIndex(d => d.codigo === codigo);
        if (index !== -1) {
            this.disciplinas.splice(index, 1);
        }
    }

    listar() {
        return this.disciplinas;
    }

    pesquisarPorCodigo(codigo) {
        return this.disciplinas.find(d => d.codigo === codigo);
    }
}
