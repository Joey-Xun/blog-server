// rem脚本
export function rem() {
    const docEl = document.documentElement
    const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    const recalc = function () {
        const clientWidth = docEl.clientWidth
        if (!clientWidth) return
        docEl.style.fontSize = 100 * (clientWidth / 320) + 'px'
    }
    if (!document.addEventListener) return
    window.addEventListener(resizeEvt, recalc, false)
    document.addEventListener('DOMContentLoaded', recalc, false)
}

// 防抖
export function debounce(func, delay) {
    let timer = null
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}


//将组件暴露在全局
import Vue from 'vue'

export function startLoad() {
    let requireContext = require.context('components/common', true, /\w.(vue)/)
    requireContext.keys().forEach(fileName => {
        const componentConfig = requireContext(fileName)
        const componentName = fileName.split('/').pop().replace(/\.\w+$/, '')
        Vue.component(
            componentName,
            componentConfig.default || componentConfig
        )
    })
}