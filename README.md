# Dungeons And Dragons com POO e SOLID 🧙‍♂️🏰🐉🎲

Este é um projeto pessoal como programador backend, desenvolvido em TypeScript, focado nos princípios SOLID e principalmente na Programação Orientada a Objetos (POO). Projeto foi desenvolvido durante minha formação como desenvolvedor backend na Trybe

## Conhecimentos Utilizados

- **Programação Orientada a Objetos (POO)**:
  - Herança
  - Abstração
  - Encapsulamento
  - Polimorfismo
- **Interface**:
  - Criação e utilização de interfaces
- **TypeScript**:
  - Implementação de Classes, Instâncias, Atributos, Métodos e Objetos
- **Princípios SOLID**
  - Single responsibility principle, Open/Closed principle, Liskov substitution principle, Interface segregation principle, Dependency inversion principle

## Funcionalidades Desenvolvidas

<details>
<summary><strong>Criação e implementação da Classe Abstrata `Race` 🧬</strong></summary><br />

A classe `Race` possui os seguintes detalhes:

- Atributos privados:
  - `name` (tipo `string`)
  - `dexterity` (tipo `number`)
- Construtor:
  - Recebe `name` e `dexterity` como parâmetros e os inicializa.
- Atributos:
  - São apenas leitura (`getter`), não podem ser alterados.
- Método estático:
  - `createdRacesInstances`: retorna um número correspondente à quantidade de instâncias criadas a partir das classes estendidas de `Race`. Na classe `Race`, lança um erro com a mensagem `Not implemented`.
- Getter abstrato:
  - `maxLifePoints`: retorna um número correspondente à quantidade máxima de pontos de vida da raça. Apenas a assinatura do método está presente na classe `Race`.
</details>

<details>
<summary><strong>Criação e implementação das Classes que Heredam de `Race` 🔗</strong></summary><br />

- Todas as raças estendem a classe abstrata `Race`.
- Classes criadas:
  - `Dwarf`
  - `Elf`
  - `Halfling`
  - `Orc`
- Cada raça possui um número máximo de pontos de vida (`maxLifePoints`), inicializado em seu construtor:
  - `Dwarf`: 80 pontos de vida
  - `Elf`: 99 pontos de vida
  - `Halfling`: 60 pontos de vida
  - `Orc`: 74 pontos de vida
- Métodos necessários foram implementados após estender a classe abstrata `Race` e os métodos necessários foram sobrescritos (`override`).
</details>

<details>
<summary><strong>Criação e implementação da Interface `Energy` ⚡</strong></summary><br />

Para tornar possível o uso dos tipos de energia "stamina" e "mana":

- interface `Energy`:
  - Atributos:
    - `type_`: do tipo `EnergyType` que pode receber os valores `'mana'` ou `'stamina'`. Esse tipo foi exportado.
    - `amount`: do tipo `number`.

Para implementar a interface `Energy`, foi necessário criar um tipo novo, o `type EnergyType`.
</details>

<details>
<summary><strong>Criação e implementação da Classe Abstrata `Archetype` 🏹</strong></summary><br />

A classe `Archetype` possui os seguintes detalhes:

- Atributos privados:
  - `name` (tipo `string`)
  - `special` (tipo `number`)
  - `cost` (tipo `number`)
- Construtor:
  - Recebe `name` como parâmetro e o inicializa.
  - `special` e `cost` são inicializados com o valor 0.
- Atributos:
  - São apenas leitura (`getter`), não podem ser alterados.
  - `name`: retorna `string`
  - `special`: retorna `number`
  - `cost`: retorna `number`
- Método estático:
  - `createdArchetypeInstances`: retorna um número correspondente à quantidade de instâncias criadas a partir das classes estendidas de `Archetype`. Na classe `Archetype`, lança um erro com a mensagem `Not implemented`.
- Getter abstrato:
  - `energyType`: retorna um `EnergyType` que corresponde ao tipo de energia do arquétipo (`mana` ou `stamina`). Apenas a assinatura do método está presente na classe `Archetype`.
</details>

<details>
<summary><strong>Criação e implementação de Classes que Heredam de `Archetype` 🔗</strong></summary><br />

- Todos os arquétipos estendem a classe abstrata `Archetype`.
- Classes criadas:
  - `Mage` 🧙‍♀️
  - `Necromancer` ☠️
  - `Warrior` ⚔️
  - `Ranger` 🍃
- Cada arquétipo possui a habilidade de causar danos de forma diferente, inicializada em seu construtor:
  - `Mage` e `Necromancer`: causam dano por meio de magia (mana).
  - `Warrior` e `Ranger`: causam dano por meio de força (`stamina`).
- Métodos necessários foram implementados após estender a classe abstrata `Archetype` e os métodos necessários foram sobrescritos (`override`).
</details>

<details>
<summary><strong>Criação e implementação da Interface `Fighter` 🥋</strong></summary><br />

A interface `Fighter` possui os seguintes detalhes:

- Atributos:
  - `lifePoints`: do tipo `number`
  - `strength`: do tipo `number`
  - `defense`: do tipo `number`
  - `energy`: do tipo `Energy` (opcional)
- Métodos:
  - `attack()`: recebe um `enemy` do tipo `Fighter` como parâmetro e não possui retorno (`void`)
  - `special()`: recebe um `enemy` do tipo `Fighter` como parâmetro e não possui retorno (`void`) (opcional)
  - `levelUp()`: não recebe parâmetro e não possui retorno (`void`)
  - `receiveDamage()`: recebe `attackPoints` do tipo `number` como parâmetro e retorna um `number`
</details>

<details>
<summary><strong>Criação e implementação da Classe `Character` 🧑‍🎤</strong></summary><br />

A classe `Character` possui os seguintes detalhes e implementa a interface `Fighter`:

- Atributos privados:
  - `race`: do tipo `Race`
  - `archetype`: do tipo `Archetype`
  - `maxLifePoints`: do tipo `number`
  - `lifePoints`: do tipo `number`
  - `strength`: do tipo `number`
  - `defense`: do tipo `number`
  - `dexterity`: do tipo `number`
  - `energy`: do tipo `Energy`
- Construtor:
  - Recebe `name` como parâmetro e inicializa:
    - `dexterity` com um valor aleatório entre 1 e 10
    - `race` com uma instância de `Elf`
    - `archetype` com uma instância de `Mage`
    - `maxLifePoints` com metade do `maxLifePoints` da raça instanciada
    - `lifePoints` com o valor de `maxLifePoints`
    - `strength` e `defense` com valores aleatórios entre 1 e 10
    - `energy` com:
      - `type_` do arquétipo instanciado
      - `amount` com um valor aleatório entre 1 e 10
- Atributos:
  - São apenas leitura (`getter`), não podem ser alterados.
  - `race`: retorna `Race`
  - `archetype`: retorna `Archetype`
  - `lifePoints`: retorna `number`
  - `strength`: retorna `number`
  - `defense`: retorna `number`
  - `dexterity`: retorna `number`
  - `energy`: retorna `Energy`
- Implementação dos métodos da interface `Fighter`:
  - `receiveDamage(attackPoints: number)`: aplica regras de dano, ajusta `lifePoints` e retorna o valor atualizado.
  - `attack(enemy: Fighter)`: aplica dano ao `enemy` baseado na `strength`.
  - `levelUp()`: incrementa `maxLifePoints`, `strength`, `dexterity`, `defense`, e ajusta `energy.amount` para 10, garantindo que `maxLifePoints` não exceda o máximo da raça. Atualiza `lifePoints`.

Para gerar valores aleatórios, usei a função `getRandomInt` fornecida no arquivo `src/utils.ts`.
</details>

<details>
<summary><strong>Criação e implementação da Interface `SimpleFighter` 👊</strong></summary><br />

A interface `SimpleFighter` possui os seguintes detalhes:

- Atributos:
  - `lifePoints`: do tipo `number`
  - `strength`: do tipo `number`
- Métodos:
  - `attack(enemy: SimpleFighter)`: recebe um `enemy` do tipo `SimpleFighter` como parâmetro e não possui retorno (`void`)
  - `receiveDamage(attackPoints: number)`: recebe `attackPoints` do tipo `number` como parâmetro e retorna um `number`
</details>

<details>
<summary><strong>Criação e implementação da Classe `Monster` 👹</strong></summary><br />

A classe `Monster` possui os seguintes detalhes e implementa a interface `SimpleFighter`:

- Atributos privados:
  - `lifePoints`: do tipo `number`
  - `strength`: do tipo `number`
- Construtor:
  - Inicializa:
    - `lifePoints` com o valor 85
    - `strength` com o valor 63
- Atributos:
  - São apenas leitura (`getter`), não podem ser alterados.
  - `lifePoints`: retorna `number`
  - `strength`: retorna `number`
- Implementação dos métodos da interface `SimpleFighter`:
  - `receiveDamage(attackPoints: number)`: aplica regras de dano, ajusta `lifePoints` e retorna o valor atualizado.
  - `attack(enemy: SimpleFighter)`: aplica dano ao `enemy` baseado na `strength`.
</details>

<details>
<summary><strong>Criação e implementação da Classe `PVP` ⚔️</strong></summary><br />

A classe `PVP` herda de `Battle` e possui os seguintes detalhes:

- Construtor:
  - Recebe dois `Characters` lutadores e os inicializa.
- Métodos sobrescritos:
  - Implementa os métodos necessários da classe `Battle`.
</details>

<details>
<summary><strong>Criação e implementação da Classe `PVE` 🌲</strong></summary><br />

A classe `PVE` possui os seguintes detalhes:

- Construtor:
  - Recebe um `Character` lutador e um array com pelo menos um `Monster`.
  - O array de monstros aceita instâncias de `Fighter` ou `SimpleFighter`.
</details>

<details>
<summary><strong>Criação e implementação da Classe `Dragon` 🐉</strong></summary><br />

A classe `Dragon` herda de `Monster` e possui os seguintes detalhes:

- Construtor:
  - Inicializa `_lifePoints` com o valor 999
</details>

<details>
<summary><strong>Criação e implementação de Objetos no Arquivo `index.ts` 📂</strong></summary><br />

- Criação de 3 objetos do tipo `Character`:
  - Variáveis:
    - `player1`, `player2`, `player3`
  - Execução do método `levelUp` várias vezes no `player1`
  - Exportação de `player1`, `player2`, `player3`
  
- Criação de 2 objetos do tipo `Monster`:
  - Variáveis:
    - `monster1` (instância de `Monster`)
    - `monster2` (instância de `Dragon`)
  - Exportação de `monster1`, `monster2`

- Criação de um objeto do tipo `PVP`:
  - Variável:
    - `pvp`
  - Parâmetros do construtor:
    - `player2` e `player3`
  - Exportação de `pvp`
  - **Nota:** Não executar o método `pvp.fight`

- Criação de um objeto do tipo `PVE`:
  - Variável:
    - `pve`
  - Parâmetros do construtor:
    - `player1` e um array contendo `monster1` e `monster2`
  - Exportação de `pve`
  - **Nota:** Não executar o método `pve.fight`

- Criação de uma função chamada `runBattles`:
  - A função recebe um array de batalhas (`battles`) do tipo `Battle`
  - Dentro da função, uma repetição percorre este array e chama o método `fight`
  - Exportação de `runBattles`
</details>

## Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
    ```sh
    git clone git@github.com:murielpaoli/DnD-POO.git
    ```

2. Entre na pasta do repositório que você acabou de clonar:
    ```sh
    cd DnD-POO
    ```

3. Instale as dependências:
    ```sh
    npm install
    ```
4. Crie uma branch a partir da branch main:
    ```sh
    Exemplo: git checkout -b zezinho-DND-POO
    ```
Agora, você está pronto para explorar os códigos deste projeto
