/**
 * Aliases are pseudos that are expressed as selectors.
 */
export const aliases: Record<string, string> = {
    // Links

    "any-link": ":is(a, area, link)[href]",
    link: ":any-link:not(:visited)",

    // Forms

    // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
    disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
    enabled: ":not(:disabled)",
    checked:
        ":is(:is(input[type=radio], input[type=checkbox])[checked], :selected)",
    required: ":is(input, select, textarea)[required]",
    optional: ":is(input, select, textarea):not([required])",

    // JQuery extensions

    /**
     * `:selected` matches option elements that have the `selected` attribute,
     * or are the first option element in a select element that does not have
     * the `multiple` attribute and does not have any option elements with the
     * `selected` attribute.
     *
     * @see https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
     */
    selected:
        "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",

    checkbox: "[type=checkbox]",
    file: "[type=file]",
    password: "[type=password]",
    radio: "[type=radio]",
    reset: "[type=reset]",
    image: "[type=image]",
    submit: "[type=submit]",

    parent: ":not(:empty)",
    header: ":is(h1, h2, h3, h4, h5, h6)",

    button: ":is(button, input[type=button])",
    input: ":is(input, textarea, select, button)",
    text: "input:is(:not([type!='']), [type=text])",
};
