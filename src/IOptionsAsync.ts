import { IOptionAsync } from './IOptionAsync'

/**
 * This asynchronous interface describes the possibility for an object oriented options management: creation and accessing.
 */
export interface IOptionsAsync<TName = string, TValue = string> {
  /**
   * Get all available options.
   */
  options(): Promise<IOptionAsync<TName, TValue>[]>
  /**
   * Get or create given option by name. Optionally a default value can be given. If there is no option saved a new one will be created using the given or a standard-default value. The actual value can be changed later of course.
   * @param optionName name of option its values (default and actual value) are saved by.
   * @param [defaultValue] default value of option. If not given a standard-default value will be used.
   */
  option(optionName: TName, defaultValue?: TValue): Promise<IOptionAsync<TName, TValue>>
}
