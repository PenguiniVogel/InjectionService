declare module InjectionServiceLib {
    let encode_content: boolean;
    let append_on_document: boolean;
    let attempt_safe: boolean;
    let html_check_run: 'html' | 'head' | 'body';
    let use_JSLog: boolean;
    function onReady(callback: () => void): void;
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
     * @param destroyAfter Destroy the added script tag after injection
     */
    function injectCode(code: string, appendOn?: 'html' | 'head' | 'body', destroyAfter?: boolean): void;
    /**
     * Inject css <br>
     * Appends css to the head in a new style tag
     *
     * @param css The css to append
     */
    function injectCSS(css: string): void;
}
