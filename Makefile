SHELL:= /bin/bash
jl_folder = jupyterlite
jl_env_file = $(jl_folder)/dep/environment.yml
jl_env_name = infodemic
activate_conda = source /opt/conda/bin/activate $(jl_env_name)

all: clean build page
    
clean:
	cd $(jl_folder) && \
	rm -rf _output .jupyterlite.doit.db

build:
	cd $(jl_folder) && \
	$(activate_conda) && \
	jupyter lite build --contents=../source

# python kernel2pyodide.py

serve:
	python -m http.server -d $(jl_folder)/_output 8000

page:
	cd $(jl_folder) && \
	$(activate_conda) && \
	ghp-import -np _output

env:
	mamba env update -n $(jl_env_name) -f $(jl_env_file)

show:
	echo $(jl_env_name)

clean-env:
	mamba remove -n $(jl_env_name) --all

modules := all env clean-env clean build page

.PHONY: $(modules)