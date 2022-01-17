declare module InjectionService {
    const enum AppendOnType {
        HEAD = "head",
        BODY = "body"
    }
    /**
     * CAUTION - This is really, really dangerous! <br>
     * Please for the love of god never ever use this unless you really have to.
     *
     * @param csp
     */
    function injectCSPMeta(csp?: string): void;
    /**
     * Inject code <br>
     * This will add a new script tag to the document
     *
     * @param code The code to append
     * @param appendOn Where to append, head or body (head is default)
     */
    function injectCode(code: string, appendOn?: AppendOnType | 'head' | 'body'): void;
    /**
     * Inject css <br>
     * Appends css to the head in a new style tag
     *
     * @param css The css to append
     */
    function injectCSS(css: string): void;
}
