# Questões Código

* Finalize o código apresentado
    1. Codifique as áreas comentadas com o que é solicitado
    2. Ajuste os erros do código
    3. No final o programa deve conter os seguintes dados
        1. Dados finais:
            | id |                   nome                    |     genero      |
            |----|-------------------------------------------|-----------------|
            | 0  |              'Código Limpo'               |  'Tecnologia'   |
            | 1  |             'Senhor do Anéis'             |   'Fantasia'    |
            | 2  |                'WildCards'                |   'Fantasia'    |
            | 3  | 'Harry Potter e o Prisioneiro de Azkaban' |   'Fantasia'    |
            | 4  |      'Javascript de alto desempenho'      |  'Tecnologia'   |
            | 5  |             'O poder da ação'             | 'Administração' |
            | 6  |            'Arquitetura Limpa'            |  'Tecnologia'   |
            | 7  |     'Harry Potter e a Camara secreta'     |   'Fantasia'    |
            | 8  |                'WildCards'                |   'Esportes'    |
            | 9  |             'O Trono do Sol'              |   'Fantasia'    |

        2. Retorno da listagem de Livros do Tipo Fantasia:
        ```
        Senhor do Anéis, WildCards, Harry Potter e o Prisioneiro de Azkaban, Harry Potter e a Camara secreta, O Trono do Sol
        ```

    4. Utilize este exercicio para explicar os erros que encontrou e o que fez para ajusta-los. Caso ache interessante, explique tambem a implementação do que foi solicitado nos comentários.

        Erros encontrados
            1 - A função buscarLivro() possuia um parametro e uma variável constante com o mesmo nome, desta forma não era possível utilizar os dois para a validação dentro do laço. Removi a variável const, pois não vi a necessidade de utiliza-la.

            2 - A função criarUmNovoLivro() contem uma validação onde busca se o livro ja foi cadastrado. Esta validação deveria retornar o índice do livro, caso ja estivesse cadastrado. Com sabemos, arrays no JS iniciam em 0 então para esta validação não poderiamos usar o 0, se tivessemos um livro cadastrado que estivesse na primera posição do array this.listLivros[0].


## Sugestões

A cada etapa do que codificar sugerimos que crie um `commit` e detalhe o que foi feito no `commit`. Isso nos ajuda a ver o progresso do que fez.