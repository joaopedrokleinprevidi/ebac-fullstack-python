module.exports = function(grunt) {
    grunt.initConfig({
      less: {
        development: {
          options: {
            paths: ["styles"]
          },
          files: {
            "dist/styles/main.css": "styles.less"
          }
        }
      },
      uglify: {
        options: {
          compress: true,
          mangle: true
        },
        my_target: {
          files: {
            "dist/script/main.min.js": ["script.js"]
          }
        }
      },
      watch: {
        styles: {
          files: ["styles.less"],
          tasks: ["less"]
        },
        scripts: {
          files: ["script.js"],
          tasks: ["uglify"]
        }
      }
    });
  
    // Carrega os plugins do Grunt
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
  
    // Tarefa padrão ao executar o comando 'grunt'
    grunt.registerTask("default", ["less", "uglify"]);
  
    // Tarefa para assistir alterações nos arquivos
    grunt.registerTask("dev", ["watch"]);
  };