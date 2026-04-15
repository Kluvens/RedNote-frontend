/// <reference types="@tarojs/taro" />

declare module '*.scss'
declare module '*.sass'
declare module '*.css'

declare const defineAppConfig: (config: Taro.AppConfig) => Taro.AppConfig
declare const definePageConfig: (config: Taro.PageConfig) => Taro.PageConfig
