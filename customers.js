import React from 'react';

class Customers extends React.Component {
    constructor(props) {
        super(props);
        let a = Infinity;
    }

    render() {
        return (
            <table className='table-dark my-table'>
                <thead>
                    <tr>
                        <th>Id</th><th>Nom</th>
                    </tr>
                </thead>
                <tbody>{
                    this.props.customers.map((customer) =>
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                        </tr>
                    )
                }</tbody>
            </table>

        )
    }
}

export default Customers