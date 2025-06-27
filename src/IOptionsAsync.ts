import { IOptionAsync } from './IOptionAsync'

/**
 * This asynchronous interface describes the possibility for an object oriented options management: creation and accessing.
 * 
 * An option is defined by its name, default and actual value. Right after creation actual and default value would be the same. The values - default and actual - are referenced by the name of the option.
 * 
 * The option itself is an instance of the implementation of the interface IOptionAsync.
 */
export interface IOptionsAsync<TName = string, TValue = string> {
  /**
   * Get all available options.
   * 
   * @returns Promise of an array of instances of the implementation of the interface IOptionAsync.
   */
  options(): Promise<IOptionAsync<TName, TValue>[]>
  /**
   * Get or create given option by name. Optionally a default value can be given. If there is no option saved a new one will be created using the given or an internal default value.
   * The actual value can be changed later of course.
   * 
   * @param optionName name of option its values - default and actual value - are saved by.
   * @param [defaultValue] default value of option. If not given a standard-default value will be used.
   * @returns Promise of an instances of the implementation of the interface IOptionAsync.
   */
  option(optionName: TName, defaultValue?: TValue): Promise<IOptionAsync<TName, TValue>>
  /**
   * Remove given option by name.
   * 
   * @param optionName name of option to be removed.
   * @returns Promise of void.
   */
  remove(optionName: TName): Promise<void>
}
