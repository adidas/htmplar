# HTMplar

.PHONY: build clean
build: clean
	for package in ./packages/* ; do \
		cp .htmplarrc.json $$package; \
		npx babel $$package/src -d $$package/lib --copy-files; \
		echo Done: $$package!; \
	done

clean:
	rm -rf packages/*/lib
	rm -rf packages/*/.htmplarrc.json