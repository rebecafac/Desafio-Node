const http = require('http');

const hostname = '127.0.0.1';
const port = 3500;

const server = http.createServer();

server.listen(port, hostname, () => {
    new ProvaTesteComponent()
});

export class ProvaTesteComponent {
	listLivros: Array<Livro> = []
	constructor() { 
		this.initLivros()
		this.criarUmNovoLivro("Arquitetura Limpa", "Tecnologia");
		this.criarUmNovoLivro("Harry Potter e a Camara secreta", "Fantasia");
		this.criarUmNovoLivro("WildCards", "Esportes");
		this.criarUmNovoLivro("O Trono do Sol", "Fantasia")
		console.log(this.listarLivrosFantasia())		
	}

	initLivros(){
		this.listLivros.push({ id: 0, nome: 'Código Limpo', genero: "Tecnologia" })
		this.listLivros.push({ id: 1, nome: 'Senhor do Anéis', genero: "Fantasia" })
		this.listLivros.push({ id: 2, nome: 'WildCards', genero: "Fantasia" })
		this.listLivros.push({ id: 3, nome: 'Harry Potter e o Prisioneiro de Azkaban', genero: "Fantasia" })
		this.listLivros.push({ id: 4, nome: 'Javascript de alto desempenho', genero: "Tecnologia" })
		this.listLivros.push({ id: 5, nome: 'O poder da ação', genero: "Administração" })
	}

	criarUmNovoLivro(nome: string, genero: string){
		if (this.buscarLivro(nome, genero) === -1){
			const novoLivro: Livro = {
				id: this.listLivros.length,
				nome: nome,
				genero: genero
			} 

			this.listLivros.push(novoLivro)
		} else {
			/**
			 * Monte a mensagem de erro avisando que já existe um Livro cadastrado sobre o nome e genero passados
			 */
			console.log("Já existe um livro com nome '" + nome + "' de genero '" + genero + "' cadastrado!")

		}
	}

	buscarLivro(livro: string, genero: string): number{
		let indiceLivro: number = -1
		for (let index = 0; index < this.listLivros.length; index++) {
			// const livro = this.listLivros[index]
			/**
             * Implemente a validação onde retorne o Indice do Livro caso encontre um com mesmo nome e genero
             */
			indiceLivro = this.listLivros[index].nome === livro  && this.listLivros[index].genero === genero ?  index : -1

			if(indiceLivro > -1 ){
				break
			}
		}
		return indiceLivro
	}

	listarLivrosFantasia(): string{
		/**
		 * Retorne uma String contendo o nome de todos os Livros que são de fantasia.
		 */
		const soFantasia: Array<string> = []

		this.listLivros.forEach(item =>{
			if(item.genero === 'Fantasia'){
				soFantasia.push(' ' + item.nome) // Espacinho no inicio para facilitar a leitura rs
			}
		})
		return soFantasia.toString()
	}
}

export interface Livro{
	id: number,
	nome: string,
	genero: string,
}

