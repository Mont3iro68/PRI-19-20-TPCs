<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:template match="/">
        <xsl:result-document href="index.html">

            <html>
                <link rel="stylesheet" type="text/css" href="style.css"/>
                <head>
                    <title>
                    Arqueositeos
                    </title>
                    <meta charset="UTF-8"></meta>
                </head>
                <body>
                    <h1>Lista de Arqueositeos</h1>
                    <ol>
                        <xsl:apply-templates/>
                    </ol>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>

    <xsl:template match="ARQELEM">
        <li>
            <a href="arqsiteos/{generate-id()}.html" id="{generate-id()}">
                <xsl:value-of select="IDENTI"/>
            </a>
        </li>
        <xsl:result-document href="arqsiteos/{generate-id()}.html">
            <html>
                <link rel="stylesheet" type="text/css" href="../style.css"/>
                <head>
                    <title>
                        <xsl:value-of select="IDENTI"/>
                    </title>
                    <meta charset="UTF-8"></meta>
                </head>
                <body>
                <ul class="navbar">
                    <li><a href="../index.html#{generate-id()}">Voltar</a></li>
                    
                    <xsl:if test="./preceding::ARQELEM[1]">
                        <li><a href="{generate-id(./preceding::ARQELEM[1])}.html">Anterior</a></li>
                    </xsl:if>

                    <li><a><xsl:value-of select="count(//ARQELEM)-count(following::ARQELEM)"/>/<xsl:value-of select="count(//ARQELEM)"/></a></li>
                    <xsl:if test="./following::ARQELEM[1]">
                    <li><a href="{generate-id(./following::ARQELEM[1])}.html">Seguinte</a></li>
                    </xsl:if>
                    
                </ul>
                <div class ="content">
                    <h1>
                        <xsl:value-of select="IDENTI"/>
                    </h1>
                    <table>
                        <tr>
                            <th>Lugar: </th>
                            <td>
                                <xsl:value-of select="LUGAR"/>
                            </td>
                        </tr>
                        <tr>
                            <th>Freguesia: </th>
                            <td>
                                <xsl:value-of select="FREGUE"/>
                            </td>
                        </tr>
                        <tr>
                            <th>Concelho: </th>
                            <td>
                                <xsl:value-of select="CONCEL"/>
                            </td>
                        </tr>
                        <tr>
                            <th>Altitude: </th>
                            <td>
                                <xsl:value-of select="ALTITU"/>
                            </td>
                        </tr>
                        <tr>
                            <th>Acesso: </th>
                            <td>
                                <xsl:value-of select="ACESSO"/>
                            </td>
                        </tr>
                        <tr>
                            <th>Descrição: </th>
                            <td>
                                <p>
                                    <xsl:apply-templates select="QUADRO|DESARQ"/>
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
</xsl:stylesheet>

