import './index.css'
import { ConverterData } from './converter-data.js'

const tabs = document.getElementById('tabs')!
const panels = document.getElementById('panels')!

function addChild<T extends HTMLElement>(node: HTMLElement, child: T, configuration: (this: T) => void): T {
    configuration.call(child)
    node.appendChild(child)
    return child
}

Object.entries(ConverterData).forEach(([key, cat], idx) => {
    const btn = document.createElement('button')
    btn.textContent = cat.label
    if (idx === 0) btn.classList.add('active'); // activate first
    btn.addEventListener('click', () => {
        document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'))
        btn.classList.add('active')
        document.querySelectorAll('section').forEach(s => s.classList.remove('active'))
        document.getElementById(`section-${key}`)?.classList.add('active')
    })
    tabs.appendChild(btn)

    const panel = document.createElement('section')
    panel.id = `section-${key}`
    if (idx === 0) panel.classList.add('active');

    cat.units.forEach(unit => {
        const card = document.createElement('div')
        card.className = 'card'
        // card.innerHTML = `
        //     <strong>${sanitizeHtml(unit.name)}</strong>
        //     <div class='formula'>${sanitizeHtml(unit.formula)}</div>
        //     <div class='note'>适用：${sanitizeHtml(unit.scenario)}</div>
        //     <input placeholder='输入 ${unit.from}' data-dir='AtoB' />
        //     <input placeholder='输入 ${unit.to}' data-dir='BtoA' />
        // `
        addChild(card, document.createElement('strong'), function() {
            this.textContent = unit.name
        })
        addChild(card, document.createElement('div'), function() {
            this.textContent = unit.formula
            this.className = 'formula'
        })
        addChild(card, document.createElement('div'), function() {
            this.textContent = '适用：' + unit.scenario
            this.className = 'note'
        })
        const inputFrom = addChild(card, document.createElement('input'), function() {
            this.placeholder = '输入 ' + unit.from
            this.dataset.dir = 'AtoB'
            this.type = 'number'
        })
        const akaFrom = unit.akaA ? addChild(card, document.createElement('div'), function() {
            this.className = 'aka-desc'
            this.innerHTML = '&nbsp;'
        }) : null
        const inputTo = addChild(card, document.createElement('input'), function() {
            this.placeholder = '输入 ' + unit.to
            this.dataset.dir = 'BtoA'
            this.type = 'number'
        })
        const akaTo = unit.akaB ? addChild(card, document.createElement('div'), function() {
            this.className = 'aka-desc'
            this.innerHTML = '&nbsp;'
        }) : null
        function updateAka() {
            if (akaFrom && unit.akaA) {
                akaFrom.textContent = unit.akaA(inputFrom.valueAsNumber)
            }
            if (akaTo && unit.akaB) {
                akaTo.textContent = unit.akaB(inputTo.valueAsNumber)
            }
        }

        inputFrom.addEventListener('input', () => {
            inputTo.value = unit.AtoB(inputFrom.valueAsNumber).toFixed(4)
            updateAka()
        })
        inputTo.addEventListener('input', () => {
            inputFrom.value = unit.BtoA(inputTo.valueAsNumber).toFixed(4)
            updateAka()
        })

        panel.appendChild(card)
    })
    panels.appendChild(panel)
})
