import { IOptionAsync } from './IOptionAsync'
export interface IOptionsAsync {
  options(): Promise<IOptionAsync[]>
  add(name: string, value: string, defaultValue: string): void
}
