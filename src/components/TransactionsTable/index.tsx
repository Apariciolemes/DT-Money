import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {

    useEffect(() => {
        api.get('transactions').then(console.log);
    }, [])
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Desenvolvimento de Website</td>
                        <td> R$12.000</td>
                        <td> Desenvolvimento de Website</td>
                        <td> 23/06/1999</td>
                    </tr>
                    <tr>
                        <td> Desenvolvimento de Website</td>
                        <td> R$12.000</td>
                        <td> Desenvolvimento de Website</td>
                        <td> 23/06/1999</td>
                    </tr>
                    <tr>
                        <td> Desenvolvimento de Website</td>
                        <td> R$12.000</td>
                        <td> Desenvolvimento de Website</td>
                        <td> 23/06/1999</td>
                    </tr>
                    <tr>
                        <td> Desenvolvimento de Website</td>
                        <td> R$12.000</td>
                        <td> Desenvolvimento de Website</td>
                        <td> 23/06/1999</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}