<?php
/**
 * Classe para conexao com o banco de dados MySql,
 * via acesso nativo do PHP/PDO.
 * É necessário ter definido as seguintes constantes: DB_NAME, DB_HOST, DB_USER, DB_PASSWORD
 */
class DB {

    /**
     * Instãncia singleton
     * @var DB 
     */
    private static $instance;
    
    /**
     * Conexão com o banco de dados
     * @var PDO 
     */
    private static $connection;

    /**
     * Construtor privado da classe singleton
     */
    private function __construct() {
        self::$connection = new PDO("mysql:dbname=" . DB_NAME . ";host=" . DB_HOST, DB_USER, DB_PASSWORD,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        self::$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        self::$connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    }

    /**
     * Obtém a instancia da classe DB
     * @return type
     */
    public static function getInstance() {

        if (empty(self::$instance)) {
            self::$instance = new DB();
        }
        return self::$instance;
    }

    /**
     * Retorna a conexão PDO com o banco de dados 
     * @return PDO
     */
    public static function getConn() {
        self::getInstance();
        return self::$connection;
    }

    /**
     * Prepara a SQl para ser executada posteriormente
     * @param String $sql
     * @return PDOStatement stmt
     */
    public static function prepare($sql) {
        return self::getConn()->prepare($sql);
    }

    /**
     * Retorna o id da última consulta INSERT 
     * @return int
     */
    public static function lastInsertId() {
        return self::getConn()->lastInsertId();
    }
    
    /**
     * Inicia uma transação
     * @return bool
     */
    public static function beginTransaction(){
        return self::getConn()->beginTransaction();
    }
    
    /**
     * Comita uma transação
     * @return bool
     */
    public static function commit(){
        return self::getConn()->commit();
    }
    
    /**
     * Realiza um rollback na transação
     * @return bool
     */
    public static function rollBack(){
        return self::getConn()->rollBack();
    }

    /**
     * Formata uma data para o MySql (05/12/2012 para 2012-12-05)
     * @param type $date
     * @return type
     */
    public static function dateToMySql($date)
    {
        return implode("-",array_reverse(explode("/",$date))); 
    }
    
    /**
     * Formata uma data do MySql (2012-12-05 para 05/12/2012)
     * @param type $date
     * @return type
     */
    public static function dateFromMySql($date)
    {
         return implode("/",array_reverse(explode("-",$date)));
    }

}