const truthTables = {
    not: [
        ['A', 'NOT'],
        [0, 1],
        [1, 0]
    ],
    and: [
        ['A', 'B', 'A  AND  B'],
        [0, 0, 0],
        [0, 1, 0],
        [1, 0, 0],
        [1, 1, 1]
    ],
    or: [
        ['A', 'B', 'A  OR  B'],
        [0, 0, 0],
        [0, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ],
    nand: [
        ['A', 'B', 'A  NAND  B'],
        [0, 0, 1],
        [0, 1, 1],
        [1, 0, 1],
        [1, 1, 0]
    ],
    nor: [
        ['A', 'B', 'A  NOR  B'],
        [0, 0, 1],
        [0, 1, 0],
        [1, 0, 0],
        [1, 1, 0]
    ],
    xor: [
        ['A', 'B', 'A  XOR  B'],
        [0, 0, 0],
        [0, 1, 1],
        [1, 0, 1],
        [1, 1, 0]
    ]
};

function updateGates() {
    const inputA = document.getElementById('inputA').checked;
    const inputB = document.getElementById('inputB').checked;

    const notALed = document.getElementById('notALed');
    const andGateLed = document.getElementById('andGateLed');
    const orGateLed = document.getElementById('orGateLed');
    const nandGateLed = document.getElementById('nandGateLed');
    const norGateLed = document.getElementById('norGateLed');
    const xorGateLed = document.getElementById('xorGateLed');

    // Update LED images based on logic gate outputs
    notALed.src = inputA ? 'apagado.png' : 'encendido.png';
    andGateLed.src = inputA && inputB ? 'encendido.png' : 'apagado.png';
    orGateLed.src = inputA || inputB ? 'encendido.png' : 'apagado.png';
    nandGateLed.src = !(inputA && inputB) ? 'encendido.png' : 'apagado.png';
    norGateLed.src = !(inputA || inputB) ? 'encendido.png' : 'apagado.png';
    xorGateLed.src = inputA !== inputB ? 'encendido.png' : 'apagado.png';
}

function toggleLed(ledId) {
    const led = document.getElementById(ledId);
    led.src = led.src.includes('encendido.png') ? 'apagado.png' : 'encendido.png';
}

function showTruthTable(gate) {
    const table = truthTables[gate];
    const truthTableElement = document.getElementById('truthTable');
    truthTableElement.innerHTML = ''; // Clear previous content

    table.forEach((row, rowIndex) => {
        const tr = document.createElement('tr');
        row.forEach((cell, cellIndex) => {
            const td = document.createElement(rowIndex === 0 ? 'th' : 'td');
            td.innerText = cell;
            tr.appendChild(td);
        });
        truthTableElement.appendChild(tr);
    });

    // Show the modal
    const modal = document.getElementById('truthTableModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('truthTableModal');
    modal.style.display = 'none';
}

// Initialize the state of the gates
document.addEventListener('DOMContentLoaded', updateGates);

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById('truthTableModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};